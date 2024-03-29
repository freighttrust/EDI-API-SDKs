/*
 * EdiFabric API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.client.model.EdiFabricCoreModelEdiX12ISA;
import io.swagger.client.model.EdiFabricWebApiModelsGenerateSettings;
import java.io.IOException;

/**
 * EdiFabricWebApiModelsGenerateIsa
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2019-04-24T17:09:45.649Z")
public class EdiFabricWebApiModelsGenerateIsa {
  @SerializedName("settings")
  private EdiFabricWebApiModelsGenerateSettings settings = null;

  @SerializedName("isa")
  private EdiFabricCoreModelEdiX12ISA isa = null;

  public EdiFabricWebApiModelsGenerateIsa settings(EdiFabricWebApiModelsGenerateSettings settings) {
    this.settings = settings;
    return this;
  }

   /**
   * Get settings
   * @return settings
  **/
  @ApiModelProperty(value = "")
  public EdiFabricWebApiModelsGenerateSettings getSettings() {
    return settings;
  }

  public void setSettings(EdiFabricWebApiModelsGenerateSettings settings) {
    this.settings = settings;
  }

  public EdiFabricWebApiModelsGenerateIsa isa(EdiFabricCoreModelEdiX12ISA isa) {
    this.isa = isa;
    return this;
  }

   /**
   * Get isa
   * @return isa
  **/
  @ApiModelProperty(value = "")
  public EdiFabricCoreModelEdiX12ISA getIsa() {
    return isa;
  }

  public void setIsa(EdiFabricCoreModelEdiX12ISA isa) {
    this.isa = isa;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EdiFabricWebApiModelsGenerateIsa ediFabricWebApiModelsGenerateIsa = (EdiFabricWebApiModelsGenerateIsa) o;
    return Objects.equals(this.settings, ediFabricWebApiModelsGenerateIsa.settings) &&
        Objects.equals(this.isa, ediFabricWebApiModelsGenerateIsa.isa);
  }

  @Override
  public int hashCode() {
    return Objects.hash(settings, isa);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EdiFabricWebApiModelsGenerateIsa {\n");
    
    sb.append("    settings: ").append(toIndentedString(settings)).append("\n");
    sb.append("    isa: ").append(toIndentedString(isa)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}

