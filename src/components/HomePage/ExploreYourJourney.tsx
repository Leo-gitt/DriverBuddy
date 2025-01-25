const ExploreYourJourney = () => {
    return (
      <div className="">
        <div className="w-11/12 mx-auto">
          <h2 className="text-center text-7xl mt-10 mb-10">Explore Your Journey</h2>
          <iframe
            className="w-full "
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.3405697499247!2d21.42766867648227!3d41.992965958213986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135415b574833cff%3A0x7ba775c4e2602c03!2sMacedonia%20St%2010%2C%20Skopje%201000!5e0!3m2!1sen!2smk!4v1737584609324!5m2!1sen!2smk"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    );
  };
  
  export default ExploreYourJourney;
  