import React from "react";
import Layout from "../../pageElements/Layout";

export const title = "Ontwikkelen";

const Chapter2_3 = () => {
  const content = (
    <div>
      <h2>Ontwikkelen</h2>
      <ul>
        <li>
        Technische kennis en analyse: Je toont met je prototype, waarin de resultaten van je technische analyse gebruikt worden, aan dat deze correct en van niveau was doordat het voldoet aan de randvoorwaarden uit je conceptontwerp.
        </li>
        <li> 
          Implementeren, Testen en opleveren: Je levert een iteratief ontwikkeld prototype op volgens de bedrijfsstandaarden. Je kunt de correcte werking garanderen.
        </li>
      </ul>
      <p>Over het ontwikkelproces</p>
    </div>
  );

  return <Layout content={content} />;
};

export default Chapter2_3;
