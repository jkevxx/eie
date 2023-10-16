import Footer from '../../components/footer/Footer';
import Menu from '../../components/menu/Menu';
import './privacy.scss';

const Privacy = () => {
  return (
    <>
      <Menu colorName="black" />
      <div className="privacy">
        <section className="section">
          <h1>Aviso de Privacidad</h1>
          <p>
            El presente documento constituye el Aviso de Privacidad para efectos
            de lo dispuesto en la Ley Federal de Protección de Datos Personales
            en Posesión de los Particulares (la “LFPDP”) y las disposiciones que
            emanan de ella o se relacionan con la misma. Este Aviso de
            Privacidad (en lo sucesivo referido como “Aviso”) aplica a la
            información personal recopilada sobre el Titular por EXPO
            INDEPENDENCIA ECONÓMICA en su carácter de Responsable. El presente
            Aviso tiene por objeto la protección de tus datos personales,
            mediante su tratamiento legítimo, controlado e informado, a efecto
            de garantizar su privacidad, así como tu derecho a la
            autodeterminación informativa. Conforme al artículo 3, fracción V,
            de la Ley, se entiende por Datos Personales: cualquier información
            concerniente a una persona física identificada o identificable de
            conformidad a lo dispuesto por la fracción I del artículo 16 de la
            Ley, será el Responsable de tu información personal (Datos
            Personales).
          </p>
          <h4>¿Qué información recopilamos?</h4>
          <p>
            El Responsable recolecta información que puede identificarle de
            manera razonable, por ejemplo, a título enunciativo mas no
            limitativo: su nombre y apellidos; fecha de nacimiento; dirección de
            correo electrónico, información general de su perfil.
          </p>
          <h4>¿Cómo usamos o compartimos la información que recopilamos?</h4>
          <p>
            Al enviar vía correo electrónico tus datos personales a los
            diferentes representantes de EXPO INDEPENDENCIA ECONÓMICA y/o
            completar la solicitud en línea que aparece en la página, aceptas y
            autorizas a EXPO INDEPENDENCIA ECONÓMICA utilizar y tratar de forma
            automatizada tus datos personales e información suministrados, los
            cuales formarán parte de nuestra base de datos con la finalidad de
            usarlos en forma enunciativa, más no limitativa para: identificarte,
            comunicarte, contactarte, enviarte información, actualizar nuestra
            base de datos, y promocionar todo el contenido artístico generado
            por EXPO INDEPENDENCIA ECONÓMICA . EXPO INDEPENDENCIA ECONÓMICA como
            responsable del tratamiento de tus datos personales, está obligado a
            cumplir con los principios de licitud, consentimiento, información,
            calidad, finalidad, lealtad, proporcionalidad y responsabilidad
            tutelados en la Ley; por tal motivo con fundamento en los artículos
            13 y 14 de la Ley, EXPO INDEPENDENCIA ECONÓMICA se compromete a
            guardar estricta confidencialidad de tus datos personales, así como
            a mantener las medidas de seguridad administrativas, técnicas y
            físicas que permitan protegerlos contra cualquier daño, pérdida,
            alteración, acceso o tratamiento no autorizado.
          </p>
          <h4>¿Cómo contactar a nuestro Departamento de Datos Personales?</h4>
          <p>
            Para cualquier comunicación acerca de nuestro Aviso de Privacidad,
            por favor c o n t a c t e a n u e s t r o D e p a r t a m e n t o d
            e D a t o s P e r s o n a l e s :
            expoindependenciaeconomica@gmail.com
          </p>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Privacy;
