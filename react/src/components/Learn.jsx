import '../App.css';

export default function Learn() {
  return (
    <>
      <section className="section">
        <h2>What I Have Learned</h2>
        <p>Practice makes perfect</p>
        <ul>
          <li>Components: UI building blocks that return elements.</li>
          <li>Props: Pass data from parent to child; read-only.</li>
          <li>useState: Hook to manage state (dynamic data).</li>
          <li>useEffect: Hook for side effects (runs after render).</li>
          <li>useContext: Access shared data without passing props manually.</li>
          <li>Context Provider: Wraps components to give them access to context data.</li>
          <li>children prop: Allows components to receive nested elements/content.</li>
          <li>export default: Exports one main function or component from a file.</li>
          <li>import: Brings in exported components/functions to use in another file.</li>
        </ul>
      </section>
    </>
  );
}
