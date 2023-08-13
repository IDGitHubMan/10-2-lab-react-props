export default function Progress({ donations }) {
  let sum = 0;
  for (let d of donations) {
    sum += d.amount;
  }
  return (
    <section className="progress">
      <h2>
        Raised <span className="secondary">${sum}</span> of
        <span className="secondary">$1000</span>
      </h2>
    </section>
  );
}
