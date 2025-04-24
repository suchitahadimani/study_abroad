const FAQs = () => {
  return (
    <section className="bg-black text-white py-16 px-6 text-center">
      <h2 className="text-3xl font-bold">FAQs</h2>
      <div className="mt-6 max-w-2xl mx-auto text-left">
        <details className="mb-4">
          <summary className="font-bold">Who can participate?</summary>
          <p>Anyone interested in computing and history!</p>
        </details>
        <details className="mb-4">
          <summary className="font-bold">Is the event free?</summary>
          <p>Yes! The event is completely free to attend.</p>
        </details>
      </div>
    </section>
  );
};

export default FAQs;
