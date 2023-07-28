const showTextButton = (statusBtn) => {
  if (!statusBtn) {
    return (
      <>
        <span className="invisible">Sem Filtros</span>
        <span className="visible">Filtrar</span>
      </>

    );
  }
  if (statusBtn) {
    return (
      <>
        <span className="visible">Sem Filtros</span>
        <span className="invisible">Filtrar</span>
      </>
    );
  }
};

export default showTextButton;
