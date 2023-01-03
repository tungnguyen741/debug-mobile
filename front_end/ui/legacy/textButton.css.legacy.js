// Copyright 2023 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
// IMPORTANT: this file is auto generated. Please do not edit this file.
/* istanbul ignore file */
export default {
  cssContent: `/*
 * Copyright (c) 2014 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

.text-button {
  margin: 2px;
  height: 24px;
  font-size: 12px;
  border: 1px solid var(--color-background-elevation-2);
  border-radius: 4px;
  padding: 0 12px;
  font-weight: 500;
  color: var(--legacy-accent-fg-color);
  background-color: var(--color-background);
  flex: none;
  white-space: nowrap;
}

.text-button:disabled {
  opacity: 38%;
}

.text-button:not(:disabled):focus,
.text-button:not(:disabled):hover,
.text-button:not(:disabled):active {
  background-color: var(--color-background-elevation-1);
  box-shadow: 0 1px 2px var(--divider-line);
  cursor: pointer;
}

.text-button:not(:disabled):active {
  background-color: var(--color-background-elevation-2);
}

.text-button:not(:disabled):focus {
  box-shadow: 0 1px 2px var(--divider-line), 0 0 0 2px var(--color-primary-variant);
}

.text-button:not(:disabled):not(.running):focus,
.text-button:not(:disabled):not(.running):hover,
.text-button:not(:disabled):not(.running):active {
  color: var(--legacy-accent-fg-color-hover);
}

.text-button.primary-button {
  --override-text-button-color: #fff;

  background-color: var(--legacy-accent-color);
  border: none;
  color: var(--override-text-button-color);
}

.text-button.link-style {
  background: none;
  border: none;
  padding: 0 !important; /* stylelint-disable-line declaration-no-important */
  font: inherit;
  cursor: pointer;
  height: 18px;
}

.text-button.primary-button:not(:disabled):focus,
.text-button.primary-button:not(:disabled):hover,
.text-button.primary-button:not(:disabled):active {
  --override-text-button-color: #fff;

  background-color: var(--legacy-accent-color-hover);
  color: var(--override-text-button-color);
}

.-theme-with-dark-background .text-button:not(.primary-button):not(:disabled):focus,
.-theme-with-dark-background .text-button:not(.primary-button):not(:disabled):hover,
.-theme-with-dark-background .text-button:not(.primary-button):not(:disabled):active {
  --override-dark-background-color: #313131;
  --override-dark-box-shadow-color: rgb(0 0 0 / 10%);

  background-color: var(--override-dark-background-color);
  box-shadow: 0 1px 2px var(--override-dark-box-shadow-color);
}

.-theme-with-dark-background .text-button:not(.primary-button):not(:disabled):focus {
  box-shadow: 0 1px 2px var(--override-dark-box-shadow-color), 0 0 0 2px var(--color-primary-variant);
}

.-theme-with-dark-background .text-button:not(.primary-button):not(:disabled):active {
  --override-dark-mode-active-background-color: #3e3e3e;

  background-color: var(--override-dark-mode-active-background-color);
}

@media (forced-colors: active) {
  .text-button {
    background-color: ButtonFace;
    color: ButtonText;
    border-color: ButtonText;
  }

  .text-button:disabled {
    forced-color-adjust: none;
    opacity: 100%;
    background: ButtonFace;
    border-color: GrayText;
    color: GrayText;
  }

  .text-button:not(:disabled):focus {
    forced-color-adjust: none;
    background-color: ButtonFace;
    color: Highlight !important; /* stylelint-disable-line declaration-no-important */
    border-color: Highlight;
    outline: 2px solid ButtonText;
    box-shadow: var(--legacy-focus-ring-active-shadow);
  }

  .text-button:not(:disabled):hover,
  .text-button:not(:disabled):active {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText !important; /* stylelint-disable-line declaration-no-important */
    box-shadow: var(--legacy-accent-color);
  }

  .text-button.primary-button {
    forced-color-adjust: none;
    background-color: Highlight;
    color: HighlightText;
    border: 1px solid Highlight;
  }

  .text-button.primary-button:not(:disabled):focus {
    background-color: Highlight;
    color: HighlightText !important; /* stylelint-disable-line declaration-no-important */
    border-color: ButtonText;
  }

  .text-button.primary-button:not(:disabled):hover,
  .text-button.primary-button:not(:disabled):active {
    background-color: HighlightText;
    color: Highlight !important; /* stylelint-disable-line declaration-no-important */
    border-color: Highlight;
  }
}
`
};
