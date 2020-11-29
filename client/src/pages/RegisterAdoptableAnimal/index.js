import React, { useState, useEffect } from 'react';
import { RadioGroup, FormControlLabel, Radio, makeStyles, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { DropzoneArea } from 'material-ui-dropzone';
import { FaUpload } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { storage } from '../../firebase/firebase';
import { getSpecies, createPet } from '../../services/api';
import CustomRange from '../../components/AgeRange/CustomRange';
import ProgressBar from '../../components/ProgressBar/index';

import './styles.css';

const useStyles = makeStyles(() => ({
  DropzoneArea: {
    backgroundColor: 'rgba(147, 112, 219, 0.8)',
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckedColor: {
    color: 'var(--color-purple) !important',
  },
  FontSize: {
    fontSize: '1.6rem  !important',
  },
  AlertColor: {
    backgroundColor: '#f44336 !important',
  },
}));

function RegisterAdoptableAnimal() {
  const classes = useStyles();

  const [rows, setRows] = useState(5);
  const [species, setSpecies] = useState([]);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [files, setFiles] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [specieSelected, setSpecieSelected] = useState('');
  const [breed, setBreed] = useState('');
  const [genre, setGenre] = useState('');
  const [age, setAge] = useState([0]);
  const [specialCares, setSpecialCares] = useState('');
  const [castrated, setCastrated] = useState('');
  const [dewormed, setDewormed] = useState('');

  const [loading, setLoading] = useState(false);
  const [percentage, setPercentage] = useState(0);
  const [valid, setValid] = useState(true);

  const history = useHistory();

  useEffect(() => {
    if (localStorage.getItem('loggedUser')) {
      getSpecies().then((response) => {
        setSpecies(response.sort(sortOptions));
      });
    } else {
      history.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function sortOptions(a, b) {
    return a.specie > b.specie ? 1 : -1;
  }

  function handleChangeTextarea(event) {
    const textareaLineHeight = 24;
    const minRows = 5;
    const maxRows = 20;

    const previousRows = event.target.rows;
    event.target.rows = minRows;

    const currentRows = ~~(event.target.scrollHeight / textareaLineHeight);

    if (currentRows === previousRows) {
      event.target.rows = currentRows;
    }

    if (currentRows >= maxRows) {
      event.target.rows = maxRows;
      event.target.scrollTop = event.target.scrollHeight;
    }

    setDescription(event.target.value);
    setRows(currentRows < maxRows ? currentRows : maxRows);
  }

  async function savePet(event) {
    event.preventDefault();

    if (files.length === 0) {
      setOpenSnackbar(true);
    } else if (
      [name, description, specialCares, specieSelected, genre, castrated, dewormed].includes(
        '',
      ) ||
      age[0] === 0
    ) {
      setValid(false);
    } else {
      setLoading(true);
      firebaseUpload(files[0]);
    }
  }

  async function save(imageUrl) {
    const pet = {
      name,
      description,
      specialCares,
      specie: specieSelected,
      breed,
      genre,
      castrated,
      dewormed,
      imageUrl,
      age: age[0],
    };
    await createPet(pet);
    setLoading(false);
    history.push('/');
  }

  async function firebaseUpload(file) {
    let newFilename = `${file.name}-${Date.now()}`;
    let uploadTask = storage.ref(`images/${newFilename}`).put(file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        let percentage = Math.floor(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(percentage);
      },
      (error) => {
        alert(error.code);
      }, async () => {
        let url = await storage.ref(`images/${newFilename}`).getDownloadURL();
        save(url);
      });
  }

  return (
    <>
      <form className="new-pet-form" onSubmit={savePet}>
        <fieldset style={{ width: '100%' }}>
          <legend>Vamos cadastrar um novo pet para adoção?</legend>
          <div className="div-input">
            <DropzoneArea
              dropzoneClass={classes.DropzoneArea}
              acceptedFiles={['image/*']}
              onChange={setFiles}
              Icon={(props) => <FaUpload {...props} color="white" />}
              dropzoneText="Arraste e solte uma imagem ou clique."
              filesLimit={1}
              showPreviews
              showPreviewsInDropzone={false}
              style={{ width: '50%' }}
              showAlerts={false}
              previewText="Imagem Adicionada:"
              onDelete={(file) => setFiles(files.filter((f) => f !== file))}
            />
          </div>

          <div className="div-input input-flex-column">
            <label htmlFor="name" className={valid ? 'label-margin' : 'invalid label-margin'}>
              Digite o nome do pet
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="div-input input-flex-column">
            <label
              htmlFor="description"
              className={valid ? 'label-margin' : 'invalid label-margin'}
            >
              Descreva melhor o pet
            </label>
            <textarea
              id="description"
              placeholder="Uma boa descrição pode ajudar a achar um novo dono mais rápido..."
              value={description}
              onChange={handleChangeTextarea}
              rows={rows}
            />
          </div>

          <div className="div-input input-flex-column">
            <label
              htmlFor="age"
              style={{ marginBottom: '4rem' }}
              className={valid ? '' : 'invalid'}
            >
              Qual a idade do pet?
            </label>
            <CustomRange value={age} onChange={setAge} step={0.1} showLabel />
          </div>

          <div className="div-input input-flex-column">
            <label htmlFor="specie" className={valid ? '' : 'invalid'}>
              Selecione a espécie do pet
            </label>
            <select
              onChange={(e) => setSpecieSelected(e.target.value)}
              value={specieSelected}
              id="specie"
              name="specie"
            >
              <option value="D" defaultValue hidden>
                Selecione...
              </option>
              {species.map((pet) => {
                return (
                  <option key={pet.id} value={pet.id}>
                    {pet.specie}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="div-input input-flex-column">
            <label htmlFor="breed" className="label-margin">
              Caso tenha, informe a raça do pet
            </label>
            <input
              id="breed"
              type="text"
              placeholder="Raça"
              value={breed}
              onChange={(e) => setBreed(e.target.value)}
            />
          </div>

          <div className="div-input input-flex-column">
            <label htmlFor="genre" className={valid ? '' : 'invalid'}>
              Selecione o gênero do pet
            </label>
            <select
              onChange={(e) => setGenre(e.target.value)}
              value={genre}
              id="genre"
              name="genre"
            >
              <option value="D" defaultValue hidden>
                Selecione...
              </option>
              <option value="1">Macho</option>
              <option value="2">Fêmea</option>
            </select>
          </div>

          <div className="div-input input-flex-column">
            <label htmlFor="special-cares" className={valid ? '' : 'invalid'}>
              O pet necessita de cuidados especiais?
            </label>
            <RadioGroup
              aria-label="special-cares"
              name="special-cares"
              onChange={(e) => setSpecialCares(e.target.value)}
              value={specialCares}
            >
              <FormControlLabel
                value="true"
                control={
                  <Radio
                    classes={{
                      checked: classes.CheckedColor,
                      colorSecondary: classes.CheckedColor,
                    }}
                  />
                }
                label="Sim"
                classes={{ label: classes.FontSize }}
              />
              <FormControlLabel
                value="false"
                control={
                  <Radio
                    classes={{
                      checked: classes.CheckedColor,
                      colorSecondary: classes.CheckedColor,
                    }}
                  />
                }
                label="Não"
                classes={{ label: classes.FontSize }}
              />
            </RadioGroup>
          </div>

          <div className="div-input input-flex-column">
            <label htmlFor="castrated" className={valid ? '' : 'invalid'}>
              O pet foi castrado?
            </label>
            <RadioGroup
              aria-label="castrated"
              name="castrated"
              onChange={(e) => setCastrated(e.target.value)}
              value={castrated}
            >
              <FormControlLabel
                value="true"
                control={
                  <Radio
                    classes={{
                      checked: classes.CheckedColor,
                      colorSecondary: classes.CheckedColor,
                    }}
                  />
                }
                label="Sim"
                classes={{ label: classes.FontSize }}
              />
              <FormControlLabel
                value="false"
                control={
                  <Radio
                    classes={{
                      checked: classes.CheckedColor,
                      colorSecondary: classes.CheckedColor,
                    }}
                  />
                }
                label="Não"
                classes={{ label: classes.FontSize }}
              />
            </RadioGroup>
          </div>

          <div className="div-input input-flex-column">
            <label htmlFor="dewormed" className={valid ? '' : 'invalid'}>
              O pet foi vermifugado?
            </label>
            <RadioGroup
              aria-label="dewormed"
              name="dewormed"
              onChange={(e) => setDewormed(e.target.value)}
              value={dewormed}
            >
              <FormControlLabel
                value="true"
                control={
                  <Radio
                    classes={{
                      checked: classes.CheckedColor,
                      colorSecondary: classes.CheckedColor,
                    }}
                  />
                }
                label="Sim"
                classes={{ label: classes.FontSize }}
              />
              <FormControlLabel
                value="false"
                control={
                  <Radio
                    classes={{
                      checked: classes.CheckedColor,
                      colorSecondary: classes.CheckedColor,
                    }}
                  />
                }
                label="Não"
                classes={{ label: classes.FontSize }}
              />
            </RadioGroup>
          </div>

          <button
            disabled={loading}
            type="submit"
            style={
              loading ? { backgroundColor: 'gray', marginBottom: '1rem' } : { marginBottom: '1rem' }
            }
            onClick={() => {}}
          >
            {!loading && 'Cadastrar'}
            {loading && <Loader type="TailSpin" color="#00BFFF" height={30} width={30} />}
          </button>
          {loading && <ProgressBar completed={percentage} bgcolor="var(--color-purple-hover)" />}
        </fieldset>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
        autoHideDuration={6000}
      >
        <MuiAlert
          classes={{ filledError: classes.AlertColor, root: classes.FontSize }}
          elevation={6}
          variant="filled"
          severity="error"
        >
          É necessário escolher uma imagem!
        </MuiAlert>
      </Snackbar>
    </>
  );
}

export default RegisterAdoptableAnimal;
