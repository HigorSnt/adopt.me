import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  FaPaw,
  FaBirthdayCake,
  FaClinicMedical,
  FaVenusMars,
  FaTag,
  FaInfoCircle,
  FaMapMarkerAlt,
  FaAt,
  FaSyringe,
  FaQuestionCircle,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';

import Header from '../../components/Header';

import './styles.css';

function PetDetails() {
  const location = useLocation();
  const { pet } = location.state;

  return (
    <>
      <Header />
      <main id="pet-detail-area">
        <div className="animal-info">
          <div className="animal-info-img">
            <img src={pet.imageUrl} alt={pet.name} />
          </div>
          <div className="animal-desc">
            <h2>{pet.name}</h2>
            {pet.description.split('\\n').map((str, i) => (
              <p key={i.toString()}>{str}</p>
            ))}
            <div className="details">
              <div className="item">
                <FaPaw size="2rem" /> <span>{pet.name}</span>
              </div>

              <div className="item">
                <FaBirthdayCake size="2rem" />
                <span>
                  {pet.age < 1
                    ? `${Math.floor(pet.age * 12)} meses`
                    : pet.age === 1
                    ? `${Math.floor(pet.age)} ano`
                    : `${Math.floor(pet.age)} anos`}
                </span>
              </div>

              <div id="genre" className="item">
                <FaVenusMars size="2rem" />
                <span>{pet.genre === 1 ? 'Macho' : 'Fêmea'}</span>
              </div>

              {pet.breed && (
                <div id="breed" className="item">
                  <FaTag size="2rem" />
                  <span>{pet.breed}</span>
                </div>
              )}

              <div className="item">
                <FaClinicMedical size="2rem" />
                <span>
                  {pet.special_cares
                    ? 'Precisa de cuidados especiais'
                    : 'Não precisa de cuidados especiais'}
                </span>
              </div>

              <div className="item">
                <FaSyringe size="2rem" />
                <span>
                  {pet.dewormed
                    ? 'Pet vermifugado e vacinado!'
                    : 'É necessário realizar vermifugação e vaciná-lo!'}
                </span>
              </div>

              <div className="item">
                <FaQuestionCircle size="2rem" />
                <span>
                  {pet.castrated
                    ? 'Pet castrado!'
                    : 'É necessário realizar castração, se for necessário!'}
                </span>
              </div>

              <div className="item">
                <FaInfoCircle size="2rem" />
                <span>{pet.ong.name}</span>
              </div>

              <div className="item">
                <FaMapMarkerAlt size="2rem" />
                <span>{pet.ong.address}</span>
              </div>

              <div className="item">
                <FaAt size="2rem" />
                <span>{pet.ong.email}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-area">
          {pet.ong.whatsapp && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              id="whatsapp-button"
              href={`https://wa.me/+55${pet.ong.whatsapp}`}
              type="button"
            >
              <FaWhatsapp size="2.5rem" /> <span>Mandar mensagem</span>
            </a>
          )}

          <a
            target="_blank"
            id="phone-button"
            rel="noopener noreferrer"
            href={`tel:${pet.ong.phone}`}
            type="button"
          >
            <FaPhone size="2rem" /> <span>Falar conosco</span>
          </a>

          <span>ou se preferir faça-nos uma visita!</span>
        </div>
      </main>
    </>
  );
}

export default PetDetails;
