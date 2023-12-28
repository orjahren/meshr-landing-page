// @ts-nocheck
"use client";

import Script from "next/script";

export default function NeoVisualizer() {
  return (
    <>
      <div className=" h-3/5 w-50 pointer-events-none" id="viz" />
      <Script
        src="https://unpkg.com/neovis.js@2.1.0"
        type="text/javascript"
        onLoad={() => {
          let neoViz;

          const config = {
            containerId: "viz",
            neo4j: {
              serverUrl: "bolt://meshr.keefer.de:7687",
              serverUser: "neo4j",
              serverPassword: "CuX^BWxr4*A9a$*k6Lu2Fy5",
            },

            initialCypher:
              "MATCH (startNode:HR)-[r*1..3]-(connectedNode) RETURN startNode, r, connectedNode limit 400",
          };
          neoViz = new NeoVis.default(config);
          console.log(neoViz);
          neoViz.render();
        }}
      />
    </>
  );
}
