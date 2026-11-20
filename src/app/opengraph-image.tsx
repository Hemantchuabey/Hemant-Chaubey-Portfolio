import { ImageResponse } from "next/og";
import { impactStats, profile } from "@/data/profile";

export const alt = `${profile.name} - ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0a0a0c",
          color: "#f4f4f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, color: "#fb923c", letterSpacing: 4 }}>
          {profile.focus.join("  ·  ").toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
            {profile.firstName}&nbsp;<span style={{ color: "#fb923c" }}>{profile.lastName}</span>
          </div>
          <div style={{ display: "flex", fontSize: 36, color: "#a1a1aa", marginTop: 12 }}>
            {profile.role} · {profile.headline}
          </div>
        </div>
        <div style={{ display: "flex", gap: 48 }}>
          {impactStats.slice(0, 3).map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", fontSize: 44, fontWeight: 700 }}>{stat.value}</div>
              <div style={{ display: "flex", fontSize: 20, color: "#a1a1aa", maxWidth: 300 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
