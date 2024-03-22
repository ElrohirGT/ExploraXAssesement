{
  description = "ExploraX Assesement Flake for reproducible environments and builds";

  inputs = {
    nixpkgs.url = "github:cachix/devenv-nixpkgs/rolling";
    systems.url = "github:nix-systems/default";
    devenv = {
      url = "github:cachix/devenv";
      inputs.nixpkgs.follows = "nixpkgs";
    };
    android-nixpkgs = {
      url = "github:tadfisher/android-nixpkgs/stable";
      inputs.nixpkgs.follows = "nixpkgs";
    };
  };

  nixConfig = {
    extra-trusted-public-keys = "devenv.cachix.org-1:w1cLUi8dv3hnoSPGAuibQv+f9TZLr6cv/Hm9XgU50cw=";
    extra-substituters = "https://devenv.cachix.org";
  };

  outputs = {
    self,
    nixpkgs,
    android-nixpkgs,
    devenv,
    systems,
    ...
  } @ inputs: let
    forEachSystem = nixpkgs.lib.genAttrs (import systems);
  in {
    packages = forEachSystem (system: {
      devenv-up = self.devShells.${system}.default.config.procfileScript;
    });

    devShells =
      forEachSystem
      (system: let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
        sdk = (import android-nixpkgs {}).sdk (sdkPkgs:
          with sdkPkgs; [
            build-tools-34-0-0
            cmdline-tools-latest
            emulator
            platform-tools
            platforms-android-34
            system-images-android-32-google-apis-x86-64
          ]);
      in {
        default = devenv.lib.mkShell {
          inherit inputs pkgs;
          modules = [
            {
              # https://devenv.sh/reference/options/
              packages = with pkgs; [
                android-studio
                sdk
                nodejs_20
                yarn
              ];

              enterShell = ''
                export PATH="${sdk}/bin:$PATH"
                ${(builtins.readFile "${sdk}/nix-support/setup-hook")}

                echo "Welcome! Here are some scripts you can run on this shell:"
                echo "$ create-avd"
                echo "- Command that will create the Android emulator to run the application"
              '';

              scripts.create-avd = {
                description = "Script that will create the Android Emulator to run the application";
                exec = "avdmanager create avd --force --name phone --package 'system-images;android-32;google_apis;x86_64'";
              };

              # These processes will all run whenever we run `devenv run`
              processes.emulator.exec = "emulator -avd phone -skin 720x1280";
              processes.expo.exec = "npx expo start";
            }
          ];
        };
      });
  };
}
