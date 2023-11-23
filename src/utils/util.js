import { useState, useEffect } from 'react'

export const useDebounce = (value, milliSeconds) => {
 const [debouncedValue, setDebouncedValue] = useState(value);

 useEffect(() => {
   const handler = setTimeout(() => {
     setDebouncedValue(value);
   }, milliSeconds);

   return () => {
     clearTimeout(handler);
   };
 }, [value, milliSeconds]);

 return debouncedValue;
};

export const formatarData = (data) => {
  const date = new Date(data);

  const dia = date.getDate();
  const mes = date.getMonth() + 1; // Mês começa do zero
  const ano = date.getFullYear();
  const hora = date.getHours();
  const minuto = date.getMinutes();

  // Adicione um zero à esquerda se o valor for menor que 10
  const formatoDia = dia < 10 ? `0${dia}` : dia;
  const formatoMes = mes < 10 ? `0${mes}` : mes;
  const formatoHora = hora < 10 ? `0${hora}` : hora;
  const formatoMinuto = minuto < 10 ? `0${minuto}` : minuto;

  return `${formatoDia}/${formatoMes}/${ano} ${formatoHora}:${formatoMinuto}`;
};