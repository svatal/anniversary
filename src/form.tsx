import * as b from "bobril";

export function Form(p: { children: b.IBobrilChildren }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "max-content auto",
        gap: "10px",
        alignItems: "center",
      }}
    >
      {p.children}
    </div>
  );
}
