import { BasePo } from '../../pageObjects/base';
import { BaseSelectors } from "../function-for-cypress/baseSelectors";

const basePage = new BasePo();

describe('Verify categories Phones, Laptops and Monitors', () => {
  it('Verify Phones page and check first three phones', () => {

    basePage.goToPage();
    basePage.clickOnElementWithText({
      selector: BaseSelectors.link,
      text: 'Phones',
      isForce: true
    });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.link,
      text: 'Samsung galaxy s6',
      isVisible: true
    });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.link,
      text: 'Nokia lumia 1520',
      isVisible: true
    });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.link,
      text: 'Nexus 6',
      isVisible: true
    });
  });

  it('Verify Laptops page and check first three laptops', () => {

    basePage.goToPage();
    basePage.clickOnElementWithText({
      selector: BaseSelectors.link,
      text: 'Laptops',
      isForce: true
    });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.link,
      text: 'Sony vaio i5',
      isVisible: true
    });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.link,
      text: 'Sony vaio i7',
      isVisible: true
    });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.link,
      text: 'MacBook air',
      isVisible: true
    });
  });

  it('Verify Monitors page and check Monitors', () => {

    basePage.goToPage();
    basePage.clickOnElementWithText({
      selector: BaseSelectors.link,
      text: 'Monitors',
      isForce: true
    });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.link,
      text: 'Apple monitor 24',
      isVisible: true
    });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
      selector: BaseSelectors.link,
      text: 'ASUS Full HD',
      isVisible: true
    });
  });
});
