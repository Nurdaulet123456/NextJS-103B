import { PrimaryButton } from "./atoms/Buttons";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header_inner">
            <div className="header_content">
              <div className="header_logo">
                <img className="img" src="/icons/logo.svg" alt="" />
              </div>

              <div className="header_link">
                <div className="header_text">
                  От Японии до Владивостока один шаг с Токидоки
                </div>
                <a className="header_text-link">Агентский договор</a>
              </div>
            </div>

            <div className="header_icons">
              <div className="header_icon">
                <img src="/icons/vk.svg" alt="" />
              </div>

              <div className="header_icon">
                <img src="/icons/telegram.svg" alt="" />
              </div>

              <div className="header_icon">
                <img src="/icons/youtube.svg" alt="" />
              </div>
            </div>

            <div className="header_contact">
              <div className="header_phone">
                <div className="header_phone-number">8 (383) 2-555-007</div>
                <div className="header_text-link">Заказать звонок</div>
              </div>
              <div className="header_button">
                <PrimaryButton>Заключить договор</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
