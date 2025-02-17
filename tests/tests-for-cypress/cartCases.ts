import { BasePo } from '../../pageObjects/base';
import { BaseSelectors } from "../function-for-cypress/baseSelectors";

const basePage = new BasePo();

describe('Verify cart functions', () => {
  it('Verify add product to cart', () => {

    basePage.goToPage();
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Phones',
        isForce: true
    });
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Samsung galaxy s6',
        isForce: true
      });
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Add to cart',
        isForce: true
      });
    basePage.reloadPage();
    basePage.waitForSomeTime(1);
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Cart',
        isForce: true
      });
    basePage.checkElementWithTextIsVisible({
        selector: BaseSelectors.td,
        text: 'Samsung galaxy s6',
        isVisible: true
    });
  });

  it('Verify remove product from cart', () => {

    basePage.goToPage();
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Phones',
        isForce: true
    });
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Samsung galaxy s6',
        isForce: true
      });
    basePage.waitForSomeTime(1);
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Add to cart',
        isForce: true
      });
    basePage.reloadPage();
    basePage.waitForSomeTime(1);
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Cart',
        isForce: true
      });
    basePage.waitForSomeTime(1);
    basePage.checkElementWithTextIsVisible({
        selector: BaseSelectors.td,
        text: 'Samsung galaxy s6',
        isVisible: true
    });
    basePage.clickOnElementWithText({
        selector: BaseSelectors.link,
        text: 'Delete',
        isForce: true
      });
      basePage.waitForSomeTime(1);
      basePage.checkElementWithTextIsVisible({
        selector: BaseSelectors.td,
        text: 'Samsung galaxy s6',
        isVisible: false
    });
  });
});
