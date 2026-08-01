pkgname=phx-core-palette
pkgver=1.0.2
pkgrel=1
pkgdesc="Material You core palette generation from Hex source color"
arch=('any')
url="https://github.com/andreapeverelli/phx-color-palette.git"
license=('GPL-3.0')

depends=('bun')

build() {
	bun build index.ts --compile --minify --outfile ../bin/phx-core-palette
}

options=(!strip)

package() {
	install -dm755 "$pkgdir/usr/share/$pkgname"
	cp ../LICENSE $pkgdir/usr/share/$pkgname
	install -Dm755 ../bin/phx-core-palette $pkgdir/usr/bin/phx-core-palette
}
