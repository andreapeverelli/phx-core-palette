import {argbFromHex, CorePalette} from "@material/material-color-utilities";

function badArguments() {
	process.stdout.write("Bad arguments\nTry 'phx-core-palette --help' for command structure.\n");
	process.exit(1);
}

if(process.argv.length < 3) {
	badArguments();
}

if(process.argv[2] === "--version") {
	process.stdout.write("PHX-CORE-PALETTE v2.0.0\n");
	process.exit(0);
}

if(process.argv[2] === "--help") {
	process.stdout.write("PHX-CORE-PALETTE\nMaterial You core palette generation from Hex source color.\n\nCommand structure:\n | phx-core-palette HEX_COLOR(\"#hhhhhh\")\n | phx-core-palette --version\n | phx-core-palette --help\n");
	process.exit(0);
}

process.stdout.write(JSON.stringify(CorePalette.of(argbFromHex(process.argv[2])), null, null));
process.exit(0);
