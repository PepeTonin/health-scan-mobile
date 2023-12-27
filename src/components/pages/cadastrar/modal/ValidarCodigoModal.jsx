import * as React from "react";
import { View } from "react-native";
import { Modal, Portal, IconButton } from "react-native-paper";
import {
  StyledTitleModal,
  StyledModalContainer,
  StyledBottonContainerModal,
  StyledTopContainerModal,
  StyledButtonModal,
  StyledTextErrorModal,
  StyledBottomContainerModal,
} from "../style";
import Colors from "../../../../css/default/Colors";
import InputText from "../../../shared/InputText/InputText";
import CountDown from "../../../shared/CountDown/CountDown";
import { reenviarEmailValidacao } from "../../../../service/server/usuarioService";

export default function ValidarCodigoModal(props) {
  const [codigo, setCodigo] = React.useState("");
  const [isNovoCodigo, setIsNovoCodigo] = React.useState(false);

  function onFinishCountDown() {
    setIsNovoCodigo(true);
  }

  function enviarCodigoNovamente(){
    setIsNovoCodigo(false);
    reenviarEmailValidacao({email: props.email})
  }

  return (
    <Portal>
      <Modal
        visible={props.visible}
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
      >
        <StyledModalContainer>
          <StyledTopContainerModal>
            <StyledTitleModal variant="headlineLarge">
              Código de verificação
            </StyledTitleModal>
          </StyledTopContainerModal>
          <StyledTitleModal variant="labelLarge">
            O código de verificação foi enviado para o e-mail:
            {" " + props.email}
          </StyledTitleModal>
          <StyledBottonContainerModal>
            <InputText
              title="Código"
              height={50}
              width={350}
              placeholder="Digite o código enviado no seu e-mail"
              onChangeText={setCodigo}
              value={codigo}
            />
          </StyledBottonContainerModal>
          <StyledTextErrorModal variant="labelLarge">
            {props.message}
          </StyledTextErrorModal>
          <StyledBottomContainerModal>
            {!isNovoCodigo ? (
              <View style={{ flexDirection: "row" }}>
                <StyledTitleModal variant="labelLarge">
                  {"Enviar o codigo novamente em: "}
                </StyledTitleModal>
                <CountDown onFinish={onFinishCountDown} initialTime={60} />
              </View>
            ) : (
              <View style={{ marginRight: 40 }}>
                <StyledTitleModal
                  variant="labelLarge"
                  onPress={enviarCodigoNovamente}
                  style={{ color: Colors.link }}
                >
                  {"Enviar o codigo novamente"}
                </StyledTitleModal>
              </View>
            )}
            <StyledButtonModal
              buttonColor={Colors.primaryButtonColor}
              mode="elevated"
              onPress={() =>
                props.validarCodigo(codigo, props.email, props.login)
              }
            >
              <StyledTitleModal variant="labelLarge">Validar</StyledTitleModal>
            </StyledButtonModal>
          </StyledBottomContainerModal>
        </StyledModalContainer>
      </Modal>
    </Portal>
  );
}
