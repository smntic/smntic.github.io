{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "portfolio-shell";

  packages = with pkgs; [
    ruby_3_4
    bundler
  ];

  shellHook = ''
    export GEM_HOME="$PWD/.gem"
    export GEM_PATH="$GEM_HOME"
    export PATH="$GEM_HOME/bin:$PATH"
  '';
}
