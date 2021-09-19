import EConverseLogo from "../../assets/svg/econverse-logo.png";
import VtexLogo from "../../assets/svg/vtex-logo.png";

import "./styles/index.scss";

const StripeFooter = () => {
  return (
    <div className="stripe-footer-wrapper">
      <p>
        NINJA SOM COMÉRCIO DE ELETRÔNICOS LTDA - 2012 - 2019, todos os direitos reservados. Rua Santa Ifigênia, <br /> 556 560/562/564 - Santa Efigênia - CEP: 01.207-000 - São Paulo / SP - CNPJ
        07.282.516/0001-15
      </p>
      <div>
        <img className="econverse-logo" src={EConverseLogo} alt="#"/>
        <img className="vtex-logo" src={VtexLogo} alt="#"/>
      </div>
    </div>
  );
};

export default StripeFooter;
