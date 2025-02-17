/// <reference types="cypress" />

import { Checker } from "./checker";
import { Clicker } from "./clicker";

export interface Helper extends Clicker, Checker { }

export class Helper {

public goToPage(): void {
    cy.visit('https://www.demoblaze.com/index.html');
  }

  public waitForSomeTime(time: number): void {
    cy.wait(time * 1000);
  }

  public reloadPage(isForce: boolean = false): void {
    cy.reload(isForce);
  }
}