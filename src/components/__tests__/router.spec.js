import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/SongItem.vue";
import { expect, test } from "vitest";

describe("Router", () => {
  test("renders router link", () => {
    const song = {
      socID: "abc",
    };

    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });

    expect(wrapper.findComponent(RouterLinkStub).props().to).toEqual({
      name: "song",
      params: { id: song.docID },
    });
  });
});
