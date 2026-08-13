import React, { useRef, useState } from "react";
import ForceGraph2D from "react-force-graph-2d";
import { Link } from "react-router-dom";
import { knowledgeGraph, nodeColors } from "../data/knowledgeGraph";

const graphHeight = 680;

export default function KnowledgeGraph() {
  const graphRef = useRef();
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeType, setActiveType] = useState("All");

  const visibleNodes = activeType === "All"
    ? knowledgeGraph.nodes
    : knowledgeGraph.nodes.filter(node => node.type === activeType);
  const visibleIds = new Set(visibleNodes.map(node => node.id));
  const visibleLinks = knowledgeGraph.links.filter(
    link => visibleIds.has(link.source.id || link.source) && visibleIds.has(link.target.id || link.target)
  );

  const focusNode = node => {
    setSelectedNode(node);
    graphRef.current?.centerAt(node.x, node.y, 600);
    graphRef.current?.zoom(4, 600);
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 md:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-5 flex flex-wrap items-start justify-between gap-4">
          <div>
            <Link to="/" className="text-sm text-cyan-300 hover:text-cyan-200">← Back to CV</Link>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-orange-300">Knowledge Graph PoC</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">Mariano's professional graph</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
              Explore companies, projects, technologies, skills and domains connected to Mariano's career.
            </p>
          </div>
          <div className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-right text-sm text-slate-300">
            <strong className="block text-2xl text-white">{visibleNodes.length}</strong>
            visible nodes
          </div>
        </header>

        <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-2xl">
          <div className="flex flex-wrap items-center gap-2 border-b border-slate-800 px-4 py-3">
            <span className="mr-2 text-xs font-semibold uppercase tracking-wider text-slate-500">Filter</span>
            {["All", ...Object.keys(nodeColors)].map(type => (
              <button
                key={type}
                type="button"
                onClick={() => { setActiveType(type); setSelectedNode(null); }}
                className={`rounded-full border px-3 py-1 text-xs transition ${activeType === type ? "border-cyan-300 bg-cyan-300 text-slate-950" : "border-slate-700 text-slate-300 hover:border-slate-400"}`}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="relative bg-[#08131d]" style={{ height: graphHeight }}>
            <ForceGraph2D
              ref={graphRef}
              width={typeof window === "undefined" ? 900 : window.innerWidth > 768 ? Math.min(window.innerWidth - 64, 1200) : window.innerWidth - 32}
              height={graphHeight}
              graphData={{ nodes: visibleNodes, links: visibleLinks }}
              backgroundColor="#08131d"
              nodeLabel={node => `${node.label} (${node.type})`}
              nodeColor={node => nodeColors[node.type] || "#94a3b8"}
              nodeVal={node => node.type === "Person" ? 11 : 5}
              linkColor={() => "rgba(148, 163, 184, 0.35)"}
              linkDirectionalArrowLength={3}
              linkDirectionalArrowRelPos={1}
              linkLabel={link => link.type}
              onNodeClick={focusNode}
              nodeCanvasObject={(node, ctx, globalScale) => {
                const label = node.label;
                const fontSize = Math.max(10 / globalScale, 2.5);
                ctx.font = `${fontSize}px sans-serif`;
                ctx.fillStyle = nodeColors[node.type] || "#94a3b8";
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.type === "Person" ? 7 : 4.5, 0, 2 * Math.PI, false);
                ctx.fill();
                if (globalScale > 1.1 || node === selectedNode) {
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  ctx.fillStyle = "#e2e8f0";
                  ctx.fillText(label, node.x, node.y + 12);
                }
              }}
            />
            <div className="pointer-events-none absolute bottom-4 left-4 text-xs text-slate-500">
              Drag nodes to rearrange · scroll to zoom · click a node for details
            </div>
          </div>
        </section>

        {selectedNode && (
          <aside className="mt-4 rounded-2xl border border-cyan-900 bg-slate-900 p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: nodeColors[selectedNode.type] }}>{selectedNode.type}</p>
                <h2 className="mt-1 text-xl font-semibold text-white">{selectedNode.label}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">{selectedNode.description}</p>
              </div>
              <button type="button" onClick={() => setSelectedNode(null)} className="text-sm text-slate-500 hover:text-white" aria-label="Close details">Close</button>
            </div>
            <p className="mt-4 text-xs text-slate-500">
              {knowledgeGraph.links.filter(link => (link.source.id || link.source) === selectedNode.id || (link.target.id || link.target) === selectedNode.id).length} connected relationships
            </p>
          </aside>
        )}
      </div>
    </main>
  );
}
