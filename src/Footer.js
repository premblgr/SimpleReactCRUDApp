function Footer() {
  const today = new Date();
  return (
    <footer>
      <div className="footer">
        <h1>Copyright &copy; {today.getFullYear()}</h1>
      </div>
    </footer>
  );
}

export default Footer;
