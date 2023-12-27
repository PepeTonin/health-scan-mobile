import * as React from "react";
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
import { validarCodigoEmail } from "../../../../service/server/usuarioService";

export default function ValidarRecuperarContaModal(props) {
  const [codigo, setCodigo] = React.useState("");
  const [message, setMessage] = React.useState(null);

  function validarCodigo() {
    const usuario = { validator: codigo, email: props.usuario.email };
    validarCodigoEmail(usuario).then((res) => {
      const dados = res.data;
      if (dados.code == 200) {
        props.setEmail(props.usuario.email);
        props.setIsRecuperarSenha(true);
        props.setVisible(false);
        props.setVisibleRecuperarConta(false);
      } else if (dados.message == "codigo-expirado") {
        setMessage("Código expirado!");
      } else {
        setMessage("Código invalido!");
      }
    });
  }

  return (
    <Portal>
      <Modal visible={props.visible} style={{backgroundColor: 'rgba(0, 0, 0, 0.9)'}}>
        <StyledModalContainer>
          <StyledTopContainerModal>
            <IconButton
              icon="chevron-left"
              iconColor={Colors.primaryFontColor}
              size={25}
              onPress={() => props.setVisible(false)}
            />
          </StyledTopContainerModal>
          <StyledTitleModal variant="labelLarge">
            DIGITE O CÓDIGO ENVIADO NO SEU EMAIL
          </StyledTitleModal>
          <StyledBottonContainerModal>
            <InputText
              title="Código"
              height={50}
              width={350}
              placeholder="Digite o código"
              onChangeText={setCodigo}
              value={codigo}
            />
          </StyledBottonContainerModal>
          <StyledTextErrorModal variant="labelLarge">
            {props.message || message}
          </StyledTextErrorModal>
          <StyledButtonContainerModal>
            <StyledButtonModalRecuperar
              buttonColor={Colors.primaryButtonColor}
              mode="elevated"
              onPress={() => validarCodigo()}
            >
              <StyledTitleModal variant="labelLarge">Validar</StyledTitleModal>
            </StyledButtonModalRecuperar>
          </StyledButtonContainerModal>
        </StyledModalContainer>
      </Modal>
    </Portal>
  );
}
