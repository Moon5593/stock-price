/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppSpinner {
    }
    interface AppStockFinder {
    }
    interface AppStockPrice {
        "stockSymbol": string;
    }
}
declare global {
    interface HTMLAppSpinnerElement extends Components.AppSpinner, HTMLStencilElement {
    }
    var HTMLAppSpinnerElement: {
        prototype: HTMLAppSpinnerElement;
        new (): HTMLAppSpinnerElement;
    };
    interface HTMLAppStockFinderElement extends Components.AppStockFinder, HTMLStencilElement {
    }
    var HTMLAppStockFinderElement: {
        prototype: HTMLAppStockFinderElement;
        new (): HTMLAppStockFinderElement;
    };
    interface HTMLAppStockPriceElement extends Components.AppStockPrice, HTMLStencilElement {
    }
    var HTMLAppStockPriceElement: {
        prototype: HTMLAppStockPriceElement;
        new (): HTMLAppStockPriceElement;
    };
    interface HTMLElementTagNameMap {
        "app-spinner": HTMLAppSpinnerElement;
        "app-stock-finder": HTMLAppStockFinderElement;
        "app-stock-price": HTMLAppStockPriceElement;
    }
}
declare namespace LocalJSX {
    interface AppSpinner {
    }
    interface AppStockFinder {
        "onAppSymbolSelected"?: (event: CustomEvent<string>) => void;
    }
    interface AppStockPrice {
        "stockSymbol"?: string;
    }
    interface IntrinsicElements {
        "app-spinner": AppSpinner;
        "app-stock-finder": AppStockFinder;
        "app-stock-price": AppStockPrice;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-spinner": LocalJSX.AppSpinner & JSXBase.HTMLAttributes<HTMLAppSpinnerElement>;
            "app-stock-finder": LocalJSX.AppStockFinder & JSXBase.HTMLAttributes<HTMLAppStockFinderElement>;
            "app-stock-price": LocalJSX.AppStockPrice & JSXBase.HTMLAttributes<HTMLAppStockPriceElement>;
        }
    }
}
