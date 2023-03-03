interface HeaderProps {
  step: number;
}

const Header = ({ step }: HeaderProps) => {
  return (
    <header className="header">
      <div className="circles">
        <div className={`circle ${step === 1 && "current"}`}>1</div>
        <div className={`circle ${step === 2 && "current"}`}>2</div>
        <div className={`circle ${step === 3 && "current"}`}>3</div>
        <div className={`circle ${step === 4 && "current"}`}>4</div>
      </div>
    </header>
  );
};

export default Header;
