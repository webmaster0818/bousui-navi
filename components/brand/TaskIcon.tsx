import { TASK_ICONS, iconInner } from "./marks";

/** 症状・工法別アイコン（太線＋一部を塗る単色） */
export default function TaskIcon({ name, size = 96, className = "" }: { name: string; size?: number; className?: string }) {
  const def = TASK_ICONS.find((d) => d.key === name);
  if (!def) return null;
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true" dangerouslySetInnerHTML={{ __html: iconInner(def) }} />
  );
}
