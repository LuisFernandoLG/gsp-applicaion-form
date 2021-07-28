export const ApplicationForm = () => {
  return (
    <form>
      <h1>GSP form</h1>
      <div className="sections">
        <div className="section">
          <h2>Información de perfil</h2>

          <div className="section__subsection">
            <h3>Información personal</h3>

            <div>
              <input placeholder="Nombre" />
            </div>
            <div>
              <input placeholder="apellido paterno" />
            </div>
            <div>
              <input placeholder="apellido materno" />
            </div>
            <div>
              <h4>Sexo</h4>
              <label htmlFor="gender1">Masculino</label>
              <input type="radio" name="gender" id="gender1" />
              <label htmlFor="gender2">Fermenino</label>
              <input type="radio" name="gender" id="gender2" />
            </div>

            <div>
              <label htmlFor="dateOfBirth">Fecha de nacimiento</label>
              <input type="date" name="" id="dateOfBirth" />
            </div>

            <div>
              <input placeholder="Estado de nacimiento" />
            </div>
          </div>

          <div className="section__subsection" s>
            <h3>Contacto</h3>

            <div>
              <input placeholder="correo" />
            </div>
            <div>
              <input placeholder="telefono" />
            </div>
          </div>

          <div className="section__subsection">
            <h3>Dirección</h3>

            <div>
              <input placeholder="Ciudad" />
            </div>
            <div>
              <input placeholder="Colonia" />
            </div>
            <div>
              <input placeholder="Calle" />
            </div>

            <div>
              <input placeholder="Código postal" />
            </div>
          </div>
        </div>

        {/* --------------------------------------------------- */}

        <div className="section">
          <h2>Información del padre</h2>

          <div className="section__subsection">
            <h3>Información personal</h3>

            <div>
              <input placeholder="Nombre" />
            </div>
            <div>
              <input placeholder="apellido paterno" />
            </div>
            <div>
              <input placeholder="apellido materno" />
            </div>
          </div>

          <div className="section__subsection">
            <h3>Economico</h3>

            <div>
              <input placeholder="Ocupación" />
            </div>
            <div>
              <input placeholder="Ingreso formal" />
            </div>

            <div>
              <input placeholder="Ingreso informal" />
            </div>
          </div>
        </div>

        {/* -------------------------------- */}

        <div className="section">
          <h2>Información de la madre</h2>

          <div className="section__subsection">
            <h3>Información personal</h3>

            <div>
              <input placeholder="Nombre" />
            </div>
            <div>
              <input placeholder="apellido paterno" />
            </div>
            <div>
              <input placeholder="apellido materno" />
            </div>
          </div>

          <div className="section__subsection">
            <h3>Economico</h3>

            <div>
              <input placeholder="Ocupación" />
            </div>
            <div>
              <input placeholder="Ingreso formal" />
            </div>

            <div>
              <input placeholder="Ingreso informal" />
            </div>
          </div>
        </div>

        {/* ---------------------------------- */}

        <div className="section">
          <h2>Estado económico</h2>

          <div className="section__subsection">
            <h3>Hogar</h3>

            <div>
              <input
                type="number"
                placeholder="¿Cuántas personas viven en tu casa?"
              />
            </div>

            <div>
              <input
                type="number"
                placeholder="¿Cuántas personas conforman tu familia?"
              />
            </div>

            <div>
              <h3>¿Tienes casa propia?</h3>
              <label htmlFor="house">Sí</label>
              <input type="radio" id="house1" />
              <label htmlFor="house2">No</label>
              <input type="radio" id="house2" />
            </div>
            <div>
              <h3>¿Tú o tu famlia tienen carros?</h3>
              <label htmlFor="cards1">Sí</label>
              <input type="radio" id="cars1" />
              <label htmlFor="cars2">No</label>
              <input type="radio" id="cars2" />
            </div>

            <div>
              <h3> ¿Tú o tus padres tienen cuentas bancarias?</h3>
              <label htmlFor="bank1">Sí</label>
              <input type="radio" id="bank1" />
              <label htmlFor="bank2">No</label>
              <input type="radio" id="bank2" />
            </div>

            <div>
              <h3> ¿Tienees internet en casa?</h3>
              <label htmlFor="internet1">Sí</label>
              <input type="radio" id="internet1" />
              <label htmlFor="internet2">No</label>
              <input type="radio" id="internet2" />
            </div>
          </div>

          <div className="section__subsection">
            <h3>Personal</h3>

            <div>
              <div>
                <h3> ¿Trabajas?</h3>
                <label htmlFor="work1">Sí</label>
                <input type="radio" id="work1" />
                <label htmlFor="work2">No</label>
                <input type="radio" id="work2" />
              </div>
            </div>
            <div>
              <input placeholder="¿Desde hace cuanto tiempo vives en Los Cabos?" />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------- */}
        <div className="section">
          <h2>Historial académico</h2>

          <div className="section__subsection">
            <h3>Secundaria</h3>

            <div>
              <input placeholder="Nombre" />
            </div>

            <div>
              <input type="number" placeholder="Promedio" />
            </div>

            <div>
              <input placeholder="Dirección" />
            </div>

            <div>
              <input type="number" placeholder="Años cursados" />
            </div>
          </div>
          <div className="section__subsection">
            <h3>Preparatoria</h3>

            <div>
              <input placeholder="Nombre" />
            </div>

            <div>
              <input type="number" placeholder="Promedio" />
            </div>

            <div>
              <input placeholder="Dirección" />
            </div>

            <div>
              <input type="number" placeholder="Años cursados" />
            </div>
          </div>
        </div>

        {/* -------------------------------------------- */}

        <div className="section">
          <h2>Actividades extracurriculares</h2>

          <div className="section__subsection">
            <h3>Actividades</h3>

            <div>
              <input placeholder="Mes / año inicio" />
            </div>

            <div>
              <input placeholder="Mes / año fin" />
            </div>
            <div>
              <input type="number" placeholder="Total de horas" />
            </div>
            <button>+</button>
          </div>
          <div className="section__subsection">
            <h3>Reconocimientos</h3>

            <div>
              <input placeholder="Reconocimiento" />
            </div>

            <div>
              <input placeholder="Institución" />
            </div>

            <div>
              <input placeholder="Descripción" />
            </div>

            <button>+</button>
          </div>
        </div>
        {/* -------------------------------------------- */}

        <div className="section">
          <h2>Responsabilidad y firma</h2>

          <div className="section__subsection">
            <h3>Firma</h3>
            <div>
              <label htmlFor="sign"></label>
              <input type="checkbox" name="" id="sign" />
            </div>

            <p>
              - Yo afirmo que la información que he proporcionado en esta
              solicitud y cualquier material adicional que presente en relación
              con el proceso de ayuda financiera es completa, precisa y
              verdadera. - He leído y estoy de acuerdo con el uso de mis datos
              personales de acuerdo al aviso de privacidad.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};
