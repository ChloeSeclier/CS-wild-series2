export default function ButtonRetour() {
  return (
    <div className="bouton-retour">
      <button type="button" onClick={() => history.go(-1)}>
        &lt; Retour
      </button>
    </div>
  );
}
