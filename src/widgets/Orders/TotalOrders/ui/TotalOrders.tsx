import React from "react";
import { Text, View } from "react-native";
import { HorizontalViewer } from "../../../../entities";
import { H2 } from "../../../../shared/components/HeadingElements";

export const TotalOrders = () => {
  return (
    <View>
      <View>
        <View>
          <View>
            <HorizontalViewer
              default={{
                information: "45 кг.",
                title: "Вес",
              }}
            />
          </View>
          <View>
            <HorizontalViewer
              default={{
                information: "30 с",
                title: "Доставка",
              }}
            />
          </View>
          <View>
            <HorizontalViewer
              default={{
                information: "500 с",
                title: "Скидка",
              }}
            />
          </View>
        </View>
        <View>
          <HorizontalViewer
            children={
              <View>
                <View>
                  <Text>Тотал</Text>
                </View>
                <View>
                  <H2>2372 с.</H2>
                </View>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
};
