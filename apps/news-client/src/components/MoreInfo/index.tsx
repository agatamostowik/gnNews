import { useState } from "react";
import { Modal } from "../Modal";
import { useAppSelector } from "../../redux/store";
import { useTranslation } from "../Translate";
import * as Styled from "./styles";

export const MoreInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const lang = useAppSelector((state) => state.app.lang);
  const translation = useTranslation(lang);

  const handleClick = () => {
    return setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Styled.Button disabled={showModal} onClick={handleClick}>
        {translation("moreInfo")}
      </Styled.Button>

      {showModal && (
        <Modal onClose={handleCloseModal}>
          <>
            <Styled.Text>
              Wykorzystałam Turborepo do podzielenia aplikacji na część FE i BE.
            </Styled.Text>
            <Styled.Text>
              Warstwa serwera jest cienka - w głównej mierze jej celem jest
              ukrycie API Key zewnętrznego serwisu, aby nie był on widoczny po
              stronie klienta.
            </Styled.Text>
            <div>
              <Styled.Text>Tech Stack:</Styled.Text>
              <ul>
                <li>- Turborepo</li>
                <li>
                  - express.js (+ pomniejsze bibliteki jak CORS czy Zod do
                  walidacji)
                </li>
                <li>- React.js</li>
                <li>- React-Router</li>
                <li>- styled-components (css in js)</li>
                <li>- sanitize.css w celu normalizacji styli</li>
                <li>
                  - Redux + RTK Query do fetchowania i inkrementacyjnego cache
                  (np. w paginacji)
                </li>
                <li>- Jest - testy reducera </li>
              </ul>

              <Styled.Text>
                Z doodatkowych rzeczy udało mi się napisać:
              </Styled.Text>
              <ul>
                <li>- pagination</li>
                <li>- wybór ile newsów może być wyświetlane na stronie</li>
                <li>- wybór języka aplikacji</li>
              </ul>

              <Styled.Text>Gdybym miała więcej czasu:</Styled.Text>
              <ul>
                <li>- dodałabym testy E2E</li>
                <li>
                  - nowy komponent z input search (szukanie artykułu po frazie)
                </li>
              </ul>
            </div>
          </>
        </Modal>
      )}
    </>
  );
};
