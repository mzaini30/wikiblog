import semuanya from '../tiddlers/published.json'
import konfigurasi from "../konfigurasi.yml"

export default function () {
  return semuanya.map(x => ({
    title: x.title,
    published_date: +x.published_date,
    slug: x.slug,
    text: x.text,
    ringkasan: x.ringkasan || konfigurasi.default.ringkasan,
    kategori: x.kategori || konfigurasi.default.kategori,
    gambar: x.gambar || konfigurasi.default.gambar
  }))
}