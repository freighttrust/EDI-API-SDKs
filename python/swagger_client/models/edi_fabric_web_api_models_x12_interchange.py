# coding: utf-8

"""
    EdiFabric API

    No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)  # noqa: E501

    OpenAPI spec version: v1
    
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six

from swagger_client.models.edi_fabric_core_model_edi_error_contexts_reader_error_context import EdiFabricCoreModelEdiErrorContextsReaderErrorContext  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_x12_iea import EdiFabricCoreModelEdiX12IEA  # noqa: F401,E501
from swagger_client.models.edi_fabric_core_model_edi_x12_isa import EdiFabricCoreModelEdiX12ISA  # noqa: F401,E501
from swagger_client.models.edi_fabric_web_api_models_x12_group import EdiFabricWebApiModelsX12Group  # noqa: F401,E501


class EdiFabricWebApiModelsX12Interchange(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'isa': 'EdiFabricCoreModelEdiX12ISA',
        'groups': 'list[EdiFabricWebApiModelsX12Group]',
        'iea_trailers': 'list[EdiFabricCoreModelEdiX12IEA]',
        'errors': 'list[EdiFabricCoreModelEdiErrorContextsReaderErrorContext]'
    }

    attribute_map = {
        'isa': 'isa',
        'groups': 'groups',
        'iea_trailers': 'ieaTrailers',
        'errors': 'errors'
    }

    def __init__(self, isa=None, groups=None, iea_trailers=None, errors=None):  # noqa: E501
        """EdiFabricWebApiModelsX12Interchange - a model defined in Swagger"""  # noqa: E501

        self._isa = None
        self._groups = None
        self._iea_trailers = None
        self._errors = None
        self.discriminator = None

        if isa is not None:
            self.isa = isa
        if groups is not None:
            self.groups = groups
        if iea_trailers is not None:
            self.iea_trailers = iea_trailers
        if errors is not None:
            self.errors = errors

    @property
    def isa(self):
        """Gets the isa of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501


        :return: The isa of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501
        :rtype: EdiFabricCoreModelEdiX12ISA
        """
        return self._isa

    @isa.setter
    def isa(self, isa):
        """Sets the isa of this EdiFabricWebApiModelsX12Interchange.


        :param isa: The isa of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501
        :type: EdiFabricCoreModelEdiX12ISA
        """

        self._isa = isa

    @property
    def groups(self):
        """Gets the groups of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501


        :return: The groups of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501
        :rtype: list[EdiFabricWebApiModelsX12Group]
        """
        return self._groups

    @groups.setter
    def groups(self, groups):
        """Sets the groups of this EdiFabricWebApiModelsX12Interchange.


        :param groups: The groups of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501
        :type: list[EdiFabricWebApiModelsX12Group]
        """

        self._groups = groups

    @property
    def iea_trailers(self):
        """Gets the iea_trailers of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501


        :return: The iea_trailers of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501
        :rtype: list[EdiFabricCoreModelEdiX12IEA]
        """
        return self._iea_trailers

    @iea_trailers.setter
    def iea_trailers(self, iea_trailers):
        """Sets the iea_trailers of this EdiFabricWebApiModelsX12Interchange.


        :param iea_trailers: The iea_trailers of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501
        :type: list[EdiFabricCoreModelEdiX12IEA]
        """

        self._iea_trailers = iea_trailers

    @property
    def errors(self):
        """Gets the errors of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501


        :return: The errors of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501
        :rtype: list[EdiFabricCoreModelEdiErrorContextsReaderErrorContext]
        """
        return self._errors

    @errors.setter
    def errors(self, errors):
        """Sets the errors of this EdiFabricWebApiModelsX12Interchange.


        :param errors: The errors of this EdiFabricWebApiModelsX12Interchange.  # noqa: E501
        :type: list[EdiFabricCoreModelEdiErrorContextsReaderErrorContext]
        """

        self._errors = errors

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(EdiFabricWebApiModelsX12Interchange, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, EdiFabricWebApiModelsX12Interchange):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
