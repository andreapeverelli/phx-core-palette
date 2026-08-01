import {argbFromHex, CorePalette} from "@material/material-color-utilities";

if(process.argv[2] === "--version") {
	process.stdout.write("PHX-CORE-PALETTE v1.0.1\n");
	process.exit(0);
}

if(process.argv[2] === "--help") {
	process.stdout.write("PHX-CORE-PALETTE\n\nCommand structure:\n | phx-core-palette \"#hex_color\"\n | phx-core-palette --version\n | phx-core-palette --help\n");
	process.exit(0);
}

process.stdout.write(JSON.stringify(CorePalette.of(argbFromHex(process.argv[2])), null, null));
process.exit(0);
