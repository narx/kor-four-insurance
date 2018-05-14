export class 보험료 {
  사용자부담금: number;
  근로자부담금: number;
}

export namespace 사대보험 {
  export function get사대보험_근로자부담금(신고소득월액: number): {
      연금보험료: number;
      고용보험료: number;
      건강보험료: number;
      장기요양보험료: number;
  };
  export function get연금보험료(신고소득월액: number): 보험료;
  export function get고용보험료(신고소득월액: number, 근로자수?: number, 우선지원대상여부?: number): 보험료;
  export function get건강보험료(신고소득월액: number): 보험료;
  export function get장기요양보험료(신고소득월액: number): 보험료;
}