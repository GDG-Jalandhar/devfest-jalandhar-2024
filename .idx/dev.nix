# To learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ... }: {
  # Which nixpkgs channel to use.
  channel = "stable-24.05"; # or "unstable"
  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs_20
  ];
  # Sets environment variables in the workspace
  env = { };
  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
    extensions = [
      "angular.ng-template"
    ];
    workspace = {
      # Runs commands when a workspace is first created.
      onCreate = {
        npm-install = "npm install --legacy-peer-deps";
        default.openFiles = [
          "src/app/app.component.ts"
        ];
      };
      # Runs commands on every workspace startup.
      onStart = { };
      # Opens the following files by default.
    };
    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "npm" "run" "start" "--" "--port" "$PORT" "--host" "0.0.0.0" "--disable-host-check" ];
          manager = "web";
        };
      };
    };
  };
}
