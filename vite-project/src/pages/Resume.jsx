import DownloadFile from "../components/downloadFile";
function Resume() {
  return (
    <div>
      <DownloadFile />
      <section className="bg-secondery px-5 py-32" id="contact">
        <div className="text-center md:w-[60%] mx-auto">
          <div className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-yellow-200 pb-2">
            Resume
          </div>
          <h4 className="text-2xl text-yellow-400 font-bold py-3 px-4">
            Front-end Proficiencies
          </h4>
          <div className="ps-0 text-lg text-gray-900">
            <p>HTML</p>
            <p>CSS</p>
            <p>Web-API's</p>
            <p>Tailwind CSS</p>
            <p>JQuery</p>
            <p>Handlebars.js</p>
            <p>React</p>
          </div>
          <h4 className="text-2xl text-yellow-600 font-bold py-3 px-4 text-center">
            Back-end Proficiencies
          </h4>
          <div className="ps-0 text-lg text-gray-900">
            <p>3rd Party API's</p>
            <p>Node.js</p>
            <p>Express</p>
            <p>SQL/Sequelize</p>
            <p>MVC</p>
            <p>MongoDB/Mongoose</p>
            <p>PWA</p>
            <p>GraphQL/Apollo Server</p>
            <p>MERN Stack</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
