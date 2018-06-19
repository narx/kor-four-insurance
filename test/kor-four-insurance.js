'use strict';

var expect = require('chai').expect;
var fourInsurance = require('../index').사대보험;

describe('성공 테스트', function(){
    
    const 신고소득월액 = 1000000;

    const expected = {
      연금보험료: 45000,
      고용보험료: 6500,
      건강보험료: 31200,
      장기요양보험료: 2300
    };

    const actual = fourInsurance.get사대보험_근로자부담금(신고소득월액);

    it(`급여 ${신고소득월액}의 연금보험료는 ${actual.연금보험료}원 입니다.`, function(){
      expect(actual.연금보험료).to.equal(expected.연금보험료);
    });

    it(`급여 ${신고소득월액}의 고용보험료 ${actual.고용보험료}원 입니다.`, function(){
      expect(actual.고용보험료).to.equal(expected.고용보험료);
    });

    it(`급여 ${신고소득월액}의 건강보험료 ${actual.건강보험료}원 입니다.`, function(){
     expect(actual.건강보험료).to.equal(expected.건강보험료);
    });

    it(`급여 ${신고소득월액}의 장기요양보험료 ${actual.장기요양보험료}원 입니다.`, function(){
      expect(actual.장기요양보험료).to.equal(expected.장기요양보험료);
    });
    
})
