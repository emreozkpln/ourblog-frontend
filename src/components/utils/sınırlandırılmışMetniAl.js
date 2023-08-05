export function sınırlandırılmışMetniAl(metin, maxKarakter) {
	if (metin.length <= maxKarakter) {
		return metin.toString();
	}
	return metin.slice(0, maxKarakter) + "...";
}
