const PersonalInfo = () => {
  return (
    <form className="personal-info__form" action="#">
      <div className="personal-info__field">
        <label className="personal-info__label" htmlFor="name">
          Name
        </label>
        <input
          className="personal-info__input"
          id="name"
          type="text"
          placeholder="e.g. Stephen King"
        />
      </div>
      <div className="personal-info__field">
        {" "}
        <label className="personal-info__label" htmlFor="name">
          Email Address
        </label>
        <input
          className="personal-info__input"
          id="name"
          type="text"
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div className="personal-info__field">
        <label className="personal-info__label" htmlFor="name">
          Phone Number
        </label>
        <input
          className="personal-info__input"
          id="name"
          type="tel"
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </form>
  );
};

export default PersonalInfo;
