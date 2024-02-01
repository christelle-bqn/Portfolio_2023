const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a
        className="icon"
        style={styles.icon}
        href="https://github.com/christelle-bqn"
      >
        <i
          className="fa-brands fa-github"
          aria-hidden="true"
          title="Christelle Boquillion' Profil GitHub"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://www.linkedin.com/in/christelle-boquillion/"
      >
        <i
          className="fa-brands fa-linkedin"
          aria-hidden="true"
          title="Christelle Boquillion' Profil LinkedIn"
        ></i>
      </a>
      <a
        className="icon"
        style={styles.icon}
        href="https://twitter.com/BqnChristelle"
      >
        <i
          className="fa-brands fa-twitter"
          aria-hidden="true"
          title="Christelle Boquillion' Profil Twitter"
        ></i>
      </a>
    </div>
  );
};

export default SocialIcons;
