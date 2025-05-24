import { it, expect, describe, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import { HomePage } from "./HomePage";

vi.mock('axios');

describe('HomePage component' ,() => {
    let loadCart;
    
  beforeEach(() => {
    loadCart = vi.fn();
  });
  it("displays the products correct ", () => {
    render(<HomePage cart={[]} loadCart={loadCart} />);
  });
});
