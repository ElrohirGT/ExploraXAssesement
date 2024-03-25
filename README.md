# ExploraXAssesement
Assesement for ExploraX

To install the development environment using [Nix Flakes](https://nixos.wiki/wiki/Flakes) (this may take a while because it install android-studio and some dependencies):
```bash
nix develop --impure
```

Then you can cd into `./ExploraXAssement` and install all dependencies using `npm install`. To run the project use `npm start`.

If you want to use the emulator configured in the environment you first need to create it using the `create-avd` command inside the dev environment. Then you can simply:
```bash
devenv up
```
To start the Metro server and the android emulator.

## Devenv setup
The development environment is setup using Devenv. To modify the android setup you can change the SDK variable on the Flake.nix file to whatever your setup needs.

To list all packages that android-nixpkgs provides:
```bash
nix flake show github:tadfisher/android-nixpkgs
```
