"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb } from "lucide-react";
import { TableDefinition, DOMAINS } from "@/lib/docs/database-schema";
import { PrismaSnippet } from "./PrismaSnippet";
import { cn } from "@/lib/utils";

interface TableDetailProps {
  table: TableDefinition;
}

export function TableDetail({ table }: TableDetailProps) {
  const domain = DOMAINS.find(d => d.id === table.domain);

  const getFieldColor = (type: string) => {
    if (type === "uuid") return "text-cyan-400";
    if (type === "string" || type === "text") return "text-green-500";
    if (type === "int" || type === "bool") return "text-amber-500";
    if (type === "enum") return "text-violet-500";
    if (type === "timestamp" || type === "date") return "text-pink-500";
    if (type === "jsonb" || type === "point") return "text-orange-500";
    return "text-gray-400";
  };

  const getConstraintBadge = (constraint: string) => {
    if (constraint === "PK") return "bg-gradient-to-r from-ns-violet to-ns-fuchsia text-white border-transparent";
    if (constraint === "FK") return "bg-blue-500/20 text-blue-400 border-blue-500/30";
    if (constraint === "UK") return "bg-green-500/20 text-green-400 border-green-500/30";
    if (constraint === "NOT NULL") return "bg-gray-500/20 text-gray-300 border-gray-500/30";
    return "bg-[rgba(255,255,255,0.05)] text-gray-400 border-[rgba(255,255,255,0.1)]";
  };

  return (
    <motion.div
      key={table.id}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="p-6 md:p-10 w-full"
    >
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl md:text-4xl font-display font-black text-white uppercase tracking-tight">
            {table.name}
          </h2>
          {domain && (
            <span className={cn("px-3 py-1 rounded-full text-xs font-bold border", domain.bgColor, domain.textColor, domain.borderColor)}>
              {domain.name}
            </span>
          )}
        </div>
        <p className="text-lg text-ns-muted leading-relaxed max-w-3xl">
          {table.description}
        </p>
      </div>

      <div className="mb-10 overflow-x-auto rounded-xl border border-[rgba(255,255,255,0.05)] bg-[#0A0A0F]">
        <table className="w-full text-left border-collapse min-w-[600px]">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)]">
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-ns-muted">Campo</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-ns-muted">Tipo</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-ns-muted">Constraint</th>
              <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-ns-muted">Descripción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[rgba(255,255,255,0.05)]">
            {table.fields.map((field, idx) => (
              <tr key={idx} className="hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                <td className="px-6 py-4 whitespace-nowrap font-mono text-sm font-medium text-white">
                  {field.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap font-mono text-sm">
                  <span className={getFieldColor(field.type)}>{field.type}</span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex gap-2">
                    {field.constraints.map(c => (
                      <span key={c} className={cn("px-2 py-0.5 rounded text-[10px] font-bold border", getConstraintBadge(c))}>
                        {c}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-400">
                  {field.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.relations.length > 0 && (
        <div className="mb-10">
          <h3 className="text-xl font-display font-bold text-white mb-4 border-b border-[rgba(255,255,255,0.1)] pb-2">Relaciones</h3>
          <ul className="space-y-3">
            {table.relations.map((rel, idx) => (
              <li key={idx} className="flex items-start gap-3 bg-[rgba(255,255,255,0.02)] p-4 rounded-xl border border-[rgba(255,255,255,0.05)]">
                <ArrowRight className="w-5 h-5 text-ns-cyan shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-white font-bold">{rel.table}</span>
                  <span className="text-ns-muted text-sm ml-2">({rel.type})</span>
                  <p className="text-sm text-gray-400 mt-1">{rel.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {table.designNotes && (
        <div className="mb-10 bg-[#1A1A2E] border-l-4 border-ns-violet p-6 rounded-r-xl">
          <div className="flex items-center gap-2 mb-2 text-ns-violet">
            <Lightbulb className="w-5 h-5" />
            <h4 className="font-bold uppercase tracking-widest text-sm">Decisiones de Diseño</h4>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            {table.designNotes}
          </p>
        </div>
      )}

      <PrismaSnippet schemaCode={table.prismaSchema} />
    </motion.div>
  );
}
