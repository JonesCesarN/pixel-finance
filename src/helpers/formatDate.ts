import { format, formatDistance } from "date-fns";
import { ptBR } from "date-fns/locale";

function Format(date: any, formatStr: string) {
  return format(new Date(date), formatStr, {
    locale: ptBR,
  });
}

function FormatDistance(date: any) {
  return formatDistance(new Date(date), new Date(), { locale: ptBR, addSuffix: true });
}

export { Format, FormatDistance };

