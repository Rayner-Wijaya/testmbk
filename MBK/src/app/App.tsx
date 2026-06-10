import { useRef } from "react";
import html2canvas from "html2canvas";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import boothPhoto from "@/imports/UAS_MBK_Kelompok_5.png";

const MATCHA = "#2D5A1B";
const MATCHA_LIGHT = "#4A7C2F";
const MATCHA_PALE = "#EAF2E3";
const CREAM = "#FAF6EF";
const GOLD = "#B8922A";
const GOLD_LIGHT = "#D4AF5A";
const DARK = "#1C2B14";
const WHITE = "#FFFFFF";

function SectionCard({
  title,
  body,
  accent = false,
  dark = false,
}: {
  title: string;
  body: string;
  accent?: boolean;
  dark?: boolean;
}) {
  const bg = dark ? MATCHA : accent ? MATCHA_PALE : WHITE;
  const titleColor = dark ? GOLD_LIGHT : MATCHA;
  const bodyColor = dark ? "#d4e8c8" : "#3a3a3a";
  const borderColor = dark ? MATCHA_LIGHT : GOLD_LIGHT;

  return (
    <div
      style={{
        backgroundColor: bg,
        border: `1.5px solid ${borderColor}`,
        borderRadius: 12,
        padding: "20px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: 32,
          height: 3,
          backgroundColor: dark ? GOLD_LIGHT : GOLD,
          borderRadius: 2,
          marginBottom: 2,
        }}
      />
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: 18,
          color: titleColor,
          lineHeight: 1.3,
          margin: 0,
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 300,
          fontSize: 12.5,
          color: bodyColor,
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}

export default function App() {
  const posterRef = useRef<HTMLDivElement>(null);

  const handleDownload = async () => {
    if (!posterRef.current) return;
    const canvas = await html2canvas(posterRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
    });
    const link = document.createElement("a");
    link.download = "Mamamatcha_Ori_SMG_Poster.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#e8e0d5",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 16px",
        fontFamily: "'DM Sans', sans-serif",
        gap: 20,
      }}
    >
      <button
        onClick={handleDownload}
        style={{
          backgroundColor: MATCHA,
          color: WHITE,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500,
          fontSize: 13,
          letterSpacing: "0.06em",
          padding: "10px 28px",
          borderRadius: 8,
          border: `1.5px solid ${GOLD_LIGHT}`,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        ↓ Download as PNG
      </button>

      {/* A3 Poster: 794 × 1123px (A3 at 96dpi) */}
      <div
        ref={posterRef}
        style={{
          width: 794,
          minHeight: 1123,
          backgroundColor: CREAM,
          boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* ── HEADER ── */}
        <div
          style={{
            backgroundColor: MATCHA,
            padding: "36px 48px 28px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* decorative circle */}
          <div
            style={{
              position: "absolute",
              top: -60,
              right: -60,
              width: 220,
              height: 220,
              borderRadius: "50%",
              border: `40px solid ${MATCHA_LIGHT}`,
              opacity: 0.35,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -30,
              left: 340,
              width: 100,
              height: 100,
              borderRadius: "50%",
              border: `20px solid ${GOLD}`,
              opacity: 0.25,
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            {/* Category tag */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: GOLD,
                color: DARK,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                fontWeight: 500,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                padding: "4px 12px",
                borderRadius: 4,
                marginBottom: 16,
              }}
            >
              <span>Laporan Bisnis</span>
              <span style={{ opacity: 0.6 }}>·</span>
              <span>Kelompok 5</span>
            </div>

            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 46,
                color: WHITE,
                margin: 0,
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Mamamatcha
            </h1>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: 46,
                color: GOLD_LIGHT,
                margin: "0 0 12px",
                lineHeight: 1.1,
              }}
            >
              Ori SMG
            </h1>

            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
                fontSize: 13,
                color: "rgba(255,255,255,0.72)",
                margin: 0,
                letterSpacing: "0.05em",
              }}
            >
              Franchise Minuman Matcha Premium · Semarang · Est. 4 Februari 2026
            </p>
          </div>
        </div>

        {/* ── GOLD DIVIDER ── */}
        <div
          style={{
            height: 4,
            background: `linear-gradient(90deg, ${GOLD}, ${GOLD_LIGHT}, ${GOLD})`,
          }}
        />

        {/* ── PHOTO BANNER ── */}
        <div style={{ height: 220, position: "relative", overflow: "hidden" }}>
          <ImageWithFallback
            src={boothPhoto}
            alt="Booth Mamamatcha Ori SMG"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center 60%",
              filter: "saturate(1.1) brightness(0.88)",
            }}
          />
          {/* overlay gradient */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(to right, ${MATCHA}CC 0%, transparent 45%, transparent 55%, ${MATCHA}99 100%)`,
            }}
          />
          {/* left quote overlay */}
          <div
            style={{
              position: "absolute",
              left: 36,
              top: "50%",
              transform: "translateY(-50%)",
              maxWidth: 200,
            }}
          >
            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: 17,
                color: WHITE,
                lineHeight: 1.55,
                margin: 0,
                textShadow: "0 2px 8px rgba(0,0,0,0.4)",
              }}
            >
              "Dari secangkir matcha,<br />lahir sebuah mimpi."
            </p>
          </div>
          {/* right badge */}
          <div
            style={{
              position: "absolute",
              right: 36,
              top: "50%",
              transform: "translateY(-50%)",
              backgroundColor: GOLD,
              color: DARK,
              borderRadius: 8,
              padding: "10px 18px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: 28,
                lineHeight: 1,
              }}
            >
              F&B
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                fontWeight: 500,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginTop: 3,
              }}
            >
              Franchise
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT GRID ── */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto auto",
            gap: 16,
            padding: "24px 32px",
          }}
        >
          {/* Row 1 */}
          <div style={{ gridColumn: "1 / 2" }}>
            <SectionCard
              title="Riwayat Bisnis & Keluarga"
              body="Mamamatcha Ori SMG adalah bisnis franchise berbasis F&B yang menjual minuman berfokus pada matcha dan berdiri tanggal 4 Februari 2026. Didirikan oleh dua orang yang berkeinginan mencoba berbisnis karena trend matcha, sehingga mencoba brand mamamatcha sebagai franchisenya."
              dark
            />
          </div>

          <div style={{ gridColumn: "2 / 3" }}>
            <SectionCard
              title="Suksesi"
              body="Memastikan omset terus naik dan bisa bertahan dengan kompetitor matcha lainnya untuk masa mendatang."
              accent
            />
          </div>

          <div style={{ gridColumn: "3 / 4" }}>
            <SectionCard
              title="Prospek Bisnis"
              body="Pastinya ada keinginan untuk ekspansi atau membuat brand minuman matcha sendiri untuk kedepannya — tidak ada yang tau."
            />
          </div>

          {/* Row 2 */}
          <div style={{ gridColumn: "1 / 2" }}>
            <SectionCard
              title="Tantangan"
              body="Harus berusaha tidak ada yang mustahil dan tetap berjuang. Bekerja keras dan melihat situasi kondisi."
              accent
            />
          </div>

          <div style={{ gridColumn: "2 / 3" }}>
            <SectionCard
              title="Rencana Masa Depan"
              body="Fokus pada digital marketing untuk meningkatkan awareness dengan mamamatcha."
              dark
            />
          </div>

          <div style={{ gridColumn: "3 / 4" }}>
            <SectionCard
              title="Pengembangan"
              body="Menambah menu — Research and Development untuk terus berinovasi dan memperluas pilihan minuman matcha premium."
            />
          </div>
        </div>

        {/* ── HIGHLIGHT STRIP ── */}
        <div
          style={{
            margin: "0 32px 20px",
            backgroundColor: MATCHA_PALE,
            border: `1px solid ${GOLD_LIGHT}`,
            borderRadius: 10,
            padding: "14px 24px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {[
            { label: "Berdiri", value: "4 Feb 2026" },
            { label: "Produk", value: "Minuman Matcha" },
            { label: "Tipe", value: "Franchise F&B" },
            { label: "Lokasi", value: "Semarang" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 600,
                  fontSize: 15,
                  color: MATCHA,
                }}
              >
                {item.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 10,
                  color: GOLD,
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: 2,
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div
          style={{
            backgroundColor: DARK,
            padding: "16px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 600,
                fontSize: 14,
                color: GOLD_LIGHT,
              }}
            >
              Mamamatcha Ori SMG
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                color: "rgba(255,255,255,0.45)",
                marginTop: 2,
                letterSpacing: "0.05em",
              }}
            >
              @mamamatcha_semarang
            </div>
          </div>
          <div
            style={{
              width: 1,
              height: 32,
              backgroundColor: `rgba(255,255,255,0.12)`,
            }}
          />
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                color: "rgba(255,255,255,0.35)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Universitas Diponegoro
            </div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 9,
                color: "rgba(255,255,255,0.35)",
                marginTop: 2,
                letterSpacing: "0.08em",
              }}
            >
              Magang & Belajar di Kampus · Kelompok 5
            </div>
          </div>
          <div
            style={{
              width: 1,
              height: 32,
              backgroundColor: `rgba(255,255,255,0.12)`,
            }}
          />
          <div style={{ textAlign: "right" }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: `2px solid ${GOLD}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "auto",
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 13,
                  color: GOLD_LIGHT,
                  fontWeight: 700,
                }}
              >
                M
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
