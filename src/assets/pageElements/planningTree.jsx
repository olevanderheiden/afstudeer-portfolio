import "./../../styles/planningTree.css";

const PlanningTree = ({ nodes, level = 0 }) => {
  if (!nodes || nodes.length === 0) return null;

  return (
    <div>
      {nodes.map((node, idx) =>
        node.isWeek ? (
          <div key={idx} style={{ marginTop: level === 0 ? "2em" : "1.5em" }}>
            <h4 className="planning-week">{node.title}</h4>
            {node.children && (
              <PlanningTree nodes={node.children} level={level + 1} />
            )}
          </div>
        ) : null
      )}
      <ul className={`planning-level-${level}`}>
        {nodes
          .filter((node) => !node.isWeek)
          .map((node, idx) => (
            <li
              key={idx}
              className={
                node.done
                  ? "planning-done"
                  : node.missed
                  ? "planning-missed"
                  : undefined
              }
            >
              {node.title}
              {node.children && (
                <PlanningTree nodes={node.children} level={level + 1} />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default PlanningTree;
