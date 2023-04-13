const Header = ({selectedTeam, teamMemberCount}) => {
  return (
    <header className="contanier">
      <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h1>Asignación de miembros de equipo</h1>
            <h3>{selectedTeam} tiene {teamMemberCount} {teamMemberCount===1?"miembro":"miembros"}</h3>
          </div>
      </div>
    </header>
  ); 
};

export default Header;
