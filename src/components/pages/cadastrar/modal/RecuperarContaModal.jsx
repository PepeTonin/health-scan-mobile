import * as React from "react";
import { View } from "react-native";
import { Modal, Portal, IconButton } from "react-native-paper";
import {
  StyledTitleModal,
  StyledModalContainer,
  StyledBottonContainerModal,
  StyledTopContainerModal,
  StyledButtonContainerModal,
  StyledTextErrorModal,
  StyledButtonModalRecuperar,
} from "../style";
import Colors from "../../../../css/default/Colors";
import InputText from "../../../shared/InputText/InputText";

export default function RecuperarContaModal(props) {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState(null);
  const [isDisabled, setIsDisabled] = React.useState(false);

  function recuperar() {
    const re = /\S+@\S+\.\S+/;
    if (!email || !re.test(email)) {
      setMessage("O email inserido não é um endereço valido");
      return;
    }

    setIsDisabled(true);
    const usuario = { email: email };
    props
      .enviarEmail(usuario)
      .then((res) => {
        if (res.data.code == 200) {
          props.setUsuario({ email: email });
          props.setIsNext(true);
        } else if (res.data.message == "email-nao-existe") {
          setMessage("Email não cadastrado");
        }
      })
      .catch((err) => {
        setMessage("Não foi possivél enviar o email");
      })
      .finally((r) => {
        setIsDisabled(false);
      });
  }

  function jaPossuiCodigo() {
    const re = /\S+@\S+\.\S+/;
    if (!email || !re.test(email)) {
      setMessage("O email inserido não é um endereço valido");
      return;
    }

    props.setUsuario({ email: email });
    setMessage(null);
    props.setIsNext(true);
  }

  function close() {
    props.setVisible(false);
    props.back();
  }

  return (
    <Portal>
      <Modal visible={props.visible} style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        <StyledModalContainer>
          <StyledTopContainerModal>
            <IconButton
              icon="close"
              iconColor={Colors.primaryFontColor}
              size={25}
              onPress={close}
            />
          </StyledTopContainerModal>
          <StyledTitleModal variant="labelLarge">
            DIGITE O SEU E-MAIL QUE IREMOS MANDAR O CODIGO PARA RECUPERAR SUA
            SENHA
          </StyledTitleModal>
          <StyledBottonContainerModal>
            <InputText
              title="Email"
              height={50}
              width={350}
              placeholder="Digite seu e-mail"
              onChangeText={setEmail}
              value={email}
            />
          </StyledBottonContainerModal>
          <StyledTextErrorModal variant="labelLarge">
            {props.message || message}
          </StyledTextErrorModal>
          <StyledButtonContainerModal>
            <StyledButtonModalRecuperar
              buttonColor={Colors.primaryButtonColor}
              mode="elevated"
              onPress={() => jaPossuiCodigo()}
            >
              <StyledTitleModal variant="labelLarge">
                Ja possuo um codigo
              </StyledTitleModal>
            </StyledButtonModalRecuperar>
            <StyledButtonModalRecuperar
              buttonColor={Colors.primaryButtonColor}
              mode="elevated"
              disabled={isDisabled}
              onPress={() => recuperar()}
            >
              <StyledTitleModal variant="labelLarge">
                Recuperar
              </StyledTitleModal>
            </StyledButtonModalRecuperar>
          </StyledButtonContainerModal>
        </StyledModalContainer>
      </Modal>
    </Portal>
  );
}
